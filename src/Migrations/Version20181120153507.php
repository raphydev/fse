<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181120153507 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE part DROP FOREIGN KEY FK_490F70C6D823E37A');
        $this->addSql('DROP INDEX IDX_490F70C6D823E37A ON part');
        $this->addSql('ALTER TABLE part DROP section_id');
        $this->addSql('ALTER TABLE program ADD section_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE program ADD CONSTRAINT FK_92ED7784D823E37A FOREIGN KEY (section_id) REFERENCES section (id)');
        $this->addSql('CREATE INDEX IDX_92ED7784D823E37A ON program (section_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE part ADD section_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE part ADD CONSTRAINT FK_490F70C6D823E37A FOREIGN KEY (section_id) REFERENCES section (id)');
        $this->addSql('CREATE INDEX IDX_490F70C6D823E37A ON part (section_id)');
        $this->addSql('ALTER TABLE program DROP FOREIGN KEY FK_92ED7784D823E37A');
        $this->addSql('DROP INDEX IDX_92ED7784D823E37A ON program');
        $this->addSql('ALTER TABLE program DROP section_id');
    }
}
