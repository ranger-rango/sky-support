import PreviewAttachments  from "./preview-attachments";
import Button from "./btn";

export function PreviewTicket({ ticket, onCancel }: { ticket: any; onCancel: () => void }) {
  return (
    <div className="preview-ticket">
        <h3 className="preview-ticket-hdr">Preview Ticket</h3>
        <p><strong>Main:</strong> {ticket.main_category}</p>
        <p><strong>Sub:</strong> {ticket.sub_category}</p>
        <p><strong>Issue:</strong> {ticket.problem_issue}</p>
        <p><strong>Description:</strong> {ticket.description}</p>

        {ticket.attachment && ticket.attachment.length > 0 && (
            <PreviewAttachments files={ticket.attachment} />
        )}

        <Button id="" className="gen-btn sec-btn" type="button" label="Close" onClick={onCancel} />
    </div>
  );
}
